
// import { Link as ReactLink} from "@nextui-org/react";
import Link from "next/link";


export default function Header() {
    return (
        <div className="min-w-full w-full flex ">
            <div className=""><Link href="/">동아리 홈페이지</Link></div>

            <ul className="flex  justify-end ml-auto">
                <li className="flex-0"><Link href="/login">로그인</Link></li>
                <li className="flex-0 ml-3">회원가입</li>
            </ul>
        </div>
    );
}