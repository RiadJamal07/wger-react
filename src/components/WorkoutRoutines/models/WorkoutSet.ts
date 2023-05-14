import { Adapter } from "utils/Adapter";
import { WorkoutSetting } from "components/WorkoutRoutines/models/WorkoutSetting";
import { ExerciseBase } from "components/Exercises/models/exerciseBase";
import { settingsToText } from "components/WorkoutRoutines/utils/repText";

export class WorkoutSet {

    settings: WorkoutSetting[] = [];
    settingsComputed: WorkoutSetting[] = [];

    constructor(
        public id: number,
        public sets: number,
        public order: number,
        public comment: string,
        settings?: WorkoutSetting[],
        settingsComputed?: WorkoutSetting[]
    ) {
        if (settings) {
            this.settings = settings;
        }
        if (settingsComputed) {
            this.settingsComputed = settingsComputed;
        }
    }

    get settingsFiltered(): WorkoutSetting[] {
        const out: WorkoutSetting[] = [];

        for (const setting of this.settings) {
            const foundSettings = out.filter(element => element.baseId === setting.baseId);

            if (foundSettings.length === 0) {
                out.push(setting);
            }
        }

        return out;
    }

    filterSettingsByExercise(exerciseBase: ExerciseBase): WorkoutSetting[] {
        return this.settings.filter((element) => element.baseId === exerciseBase.id);
    }

    getSettingsTextRepresentation(exerciseBase: ExerciseBase, translate?: (key: string) => string): string {
        translate = translate || (str => str);

        return settingsToText(this.sets, this.filterSettingsByExercise(exerciseBase), translate);
    }
}


export class SetAdapter implements Adapter<WorkoutSet> {
    fromJson(item: any) {
        return new WorkoutSet(
            item.id,
            item.sets,
            item.order,
            item.comment
        );
    }

    toJson(item: WorkoutSet): any {
        return {
            id: item.id,
            sets: item.sets,
            order: item.order,
            comment: item.order
        };
    }
}