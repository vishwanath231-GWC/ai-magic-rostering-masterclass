import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const QuoteBox = ({ content, title }) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="font-semibold">Read more</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div>{content}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default QuoteBox;
