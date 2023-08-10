export type InputProps = {
    type: string;
    name: string;
    value: string;
    onChange: () => void;
    errors?: { [x: string]: any; };
}