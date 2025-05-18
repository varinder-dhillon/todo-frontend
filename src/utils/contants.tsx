import Delete from "../assets/Trash.svg";
import done from "../assets/Done_round.svg";
import doneHover from "../assets/Done_round_duotone.svg";
import editHover from "../assets/Edit_duotone.svg";
import timerHover from "../assets/Time_atack_duotone.svg";
import closeHover from "../assets/close_ring_duotone.svg";
import close from "../assets/close_ring_duotone-1.svg";
import addHover from "../assets/Add_round_duotone.svg";

export const icons = {
    "work": "💻", "thinking": "💭", "tea": "🍵", "exercise": "🏋️", "study": "📚", "clock": "⏰"
} as const;

export const status = ["inProgress", "completed", "wontDo"] as const;
export const statusColors = {
    "inProgress": "#e9a23b", "completed": "#32d657", "wontDo": "#dd524c", "todo": "#e3e8ef",
} as const;
export const statusIcons = {
    "inProgress": timerHover,
    "completed": doneHover,
    "wontDo" : closeHover
} as const;
export const statusText = {
    "inProgress": "In Progress",
    "completed": "Completed",
    "wontDo" : "Won't Do"
} as const;

export const actionIcons = {
    delete: Delete,
    done,
    doneHover,
    editHover,
    timerHover,
    closeHover,
    addHover,
    close
} as const;