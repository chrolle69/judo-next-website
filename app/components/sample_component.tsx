interface SampleComponentProps {
    name: string;
}

export default function SampleComponent(props: SampleComponentProps) {
    return <div>Hello, {props.name}!</div>;
}
