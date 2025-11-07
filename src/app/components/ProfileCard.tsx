import { Post } from "../types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Heart } from "lucide-react";
import { useAxios } from "../hooks/useAxios";
import { useUser } from "../providers/UserProvider";
import Link from "next/link";
dayjs.extend(relativeTime);

export const Profile = ({ userId }: { userId: string }) => {
    const [isFollowed, setIsFollowed] = useState(false);
    return (
        <div className=""></div>
    );
};