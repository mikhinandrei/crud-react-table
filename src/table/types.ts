interface EditValue {
    value: string | number;
    text: string;
}

export interface Column {
    Header: string;
    accessor?: string;
    hidden?: boolean;
    disableSortBy?: boolean;
    Cell?(object): JSX.Element;
    editWidget?(integer): JSX.Element;
    getFormData?(formData: FormData, submitForm: HTMLFormElement);
    getJsonData?(jsonData: Object, submitForm: HTMLFormElement);
    editable?: boolean;
    editType?: string;
    editValues?: EditValue[];
    editFormFields?: string[];
    tooltip?: string;
    sortType?: string;
    dataType?: "number"; // more types cast rules not supported yet
}

export interface PaginatedResponse<T> {
    results: T[]
    params: {
        pages: number
    }
}
