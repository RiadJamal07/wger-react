import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Step5Images = (props: { onContinue: React.MouseEventHandler<HTMLButtonElement> | undefined; onBack: React.MouseEventHandler<HTMLButtonElement> | undefined; }) => {
    const [t] = useTranslation();

    return <>
        <Typography>Images must be compatible with the CC BY SA license. If in doubt, upload only photos you've taken
            yourself.</Typography>
        <Box sx={{ mb: 2 }}>
            <div>
                <Button
                    variant="contained"
                    onClick={props.onContinue}
                    sx={{ mt: 1, mr: 1 }}
                >
                    {t('continue')}
                </Button>
                <Button
                    disabled={false}
                    onClick={props.onBack}
                    sx={{ mt: 1, mr: 1 }}
                >
                    {t('back')}
                </Button>
            </div>
        </Box>
    </>;
};