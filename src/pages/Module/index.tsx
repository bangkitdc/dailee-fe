import { StudentsMod } from "@components/privates/StudentsModule/StudentsMod";
import { StudentsTopicList } from "@components/privates/StudentsModule/StudentsTopic";
import { BaseButton } from "@components/shares/Buttons";
import { CaretLeft } from "@assets/icons/Caret";
import { useNavigate } from "react-router-dom";

export const Module = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen relative items-stretch">
        <div className="flex flex-col gap-5 overflow-y-auto overscroll-contain pb-[68px]">
            <div className="flex px-5 pt-4">
                <BaseButton 
                    className="mr-4 mb-4 mt-1"
                    onClick={() => {
                        navigate("/");
                    }}
                >
                    <CaretLeft strokeClassName="stroke-brown-03" />
                    
                </BaseButton>
                <h1 className="text-[26px]">
                    <span className="text-2xl font-bold">Student's Module</span>
                </h1>
            </div>
            <div>
                <StudentsTopicList />
            </div>
            <StudentsMod /> 
        </div>
        </div>
    );
};
