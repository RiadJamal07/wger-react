import React from 'react';

import { Button, Menu, MenuItem } from "@mui/material";
import { Trans } from "react-i18next";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { WgerModal } from "components/Core/WgerModal";
import { WeightForm } from "components/BodyWeight/Form";
import { WeightEntry } from "components/BodyWeight/model";
import { t } from "i18next";

interface ActionButtonProps {
    weight: WeightEntry
}

export const ActionButton = ({ weight }: ActionButtonProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [openModal, setOpenModal] = React.useState(false);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEdit = () => {
        console.log(`Editing weight ID: ${weight.id}`);
        handleClose();
        handleOpenModal();
    };

    const handleDelete = () => {
        console.log(`Deleting weight ID: ${weight.id}`);
        handleClose();
    };

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <div>
            <Button onClick={handleClick}>
                <ArrowDropDownIcon />
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleEdit}><Trans i18nKey={"edit"} /></MenuItem>
                <MenuItem onClick={handleDelete}><Trans i18nKey={"delete"} /></MenuItem>
            </Menu>

            <WgerModal title={t('edit')} openFn={openModal} closeFn={handleCloseModal}>
                <WeightForm weightEntry={weight} />
            </WgerModal>
        </div>
    );
};
