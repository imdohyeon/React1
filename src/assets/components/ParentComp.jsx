import ChildComp from "./ChildComp";
import reactLogo from "../react.svg";
import viteLogo from "../vite.svg";

export default function ParentComp() {
    return (
        <>
            <ChildComp
                imageInfo={
                    {
                        src: reactLogo,
                        alt: "React",
                    }
                }
                width = {100}
                height = {100}
            />

            <ChildComp
                imageInfo={
                    {
                        src: viteLogo,
                        alt: "Vite",
                    }
                }
                width = {100}
                height = {100}
            />
            </>
    )
}