import { Activity } from "../../ActivityTable/types";

interface Props { 
    properties: Property[],
    selected: Property,
    onSelect: (property: Property) => void;
    onClickAdd: () => void;
}

interface Property { 
    addrLineOne: string, 
    city: string,
    province: string,
    postalCode: string,
    favourited: boolean,
    activities: Activity[] | [],
    notes: string,
}

interface addPropertyProps { 
    open: boolean;
    onCancel: () => void;
    onSave: (property: Property) => void;
}

export default Props;
export type { addPropertyProps, Property };