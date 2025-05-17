import Delete from "../assets/Trash.svg";
import done from "../assets/Done_round.svg";
import doneHover from "../assets/Done_round_duotone.svg";
import editHover from "../assets/Edit_duotone.svg";
import timerHover from "../assets/Time_atack_duotone.svg";
import closeHover from "../assets/close_ring_duotone.svg";
import addHover from "../assets/Add_round_duotone.svg";

export const icons = {
    "work": "💻", "thinking": "💭", "tea": "🍵", "exercise": "🏋️", "study": "📚", "clock": "⏰"
} as const

export const actionIcons = {
    delete: Delete,
    done,
    doneHover,
    editHover,
    timerHover,
    closeHover,
    addHover
} as const