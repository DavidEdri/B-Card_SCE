import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/icons/Edit";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import { useDispatch } from "react-redux";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { CardPopulatedFields } from "@project/types";
import { useCardEditStyles } from "./style";
import { CardEditActionType } from "./CardEdit";
import { openDialog } from "../../../../redux/actions/utilsActions";
import { CardEditModal } from "./CardEditModal";
import { useTypedSelector } from "../../../../redux";

type CardEditProps = {
  editMode?: boolean;
};

const actions: { label: string; type: CardEditActionType }[] = [
  { label: "הגדרות ראשוניות", type: "cardSettings" },
  { label: "תמונה ראשית", type: "mainImage" },
  { label: "לוגו", type: "mainAvatar" },
  { label: "תקציר העסק", type: "mainText" },
  { label: "כפתורים", type: "buttons" },
  { label: "קצת עלינו", type: "about" },
  { label: "קישור חיצוני", type: "actionText" },
  { label: "פאנלים", type: "expansionPanels" },
  { label: "שמור באנשי קשר", type: "vcf" },
  { label: "גלריה", type: "gallery" },
  { label: "לקוחות ממליצים", type: "testimonials" },
  { label: "יצירת קשר", type: "form" },
];

export const CardEdit = ({ editMode = false }: CardEditProps) => {
  const classes = useCardEditStyles();
  const card = useTypedSelector(
    (state) => state.card.data,
  ) as CardPopulatedFields;
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(editMode);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (actionType: CardEditActionType) => {
    handleClose();
    dispatch(
      openDialog({
        body: <CardEditModal cardValues={card} actionType={actionType} />,
        title: "עריכת כרטיס",
        fullscreen: true,
      }),
    );
  };

  return (
    <div className={classes.root}>
      <Backdrop open={open} />
      <ClickAwayListener onClickAway={handleClose}>
        <SpeedDial
          ariaLabel="SpeedDial tooltip example"
          className={classes.speedDial}
          icon={<SpeedDialIcon color="secondary" />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
        >
          {actions
            .map((action) => (
              <SpeedDialAction
                key={action.type}
                icon={action.label}
                tooltipTitle=""
                onClick={() => handleClick(action.type)}
                FabProps={{ variant: "extended", style: { margin: 4 } }}
              />
            ))
            .reverse()}
        </SpeedDial>
      </ClickAwayListener>
    </div>
  );
};
