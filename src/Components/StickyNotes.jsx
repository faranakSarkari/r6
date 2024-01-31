import React from "react";
import Notes from "./Notes";

export default function StickyNotes() {
  const noteData = [
    { id: 1, title: "title one", content: "content 1" },
    { id: 2, title: "title two", content: "content 2" },
    { id: 3, title: "title three", content: "content 3" },
    { id: 4, title: "title four", content: "content 4" },
    { id: 5, title: "title five", content: "content 5" },
    { id: 6, title: "title six", content: "content 6" },
  ];
  const notes = noteData?.map((e, index) => (
    <Notes title={e.title} content={e.content} key={index}></Notes>
  ));
  return <ul>{notes}</ul>;
}
