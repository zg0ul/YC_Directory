import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const StartUpCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _createdAt,
    views,
    author: { _id: autherId, name: authorName },
    _id: postId,
    title,
    category,
    image,
    desciption,
  } = post;

  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span>{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${autherId}`}>
            <p className="text-16-medium line-clamp-1">{authorName}</p>
          </Link>
          <Link href={`/startup/${postId}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${autherId}`}>
          <Image
            src="https://placehold.co/48x48"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${postId}`}>
        <p className="startup_card_desc">{desciption}</p>

        <img src={image} alt="placeholder" className="startup-card_img" />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category.toLowerCase()}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${postId}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartUpCard;
