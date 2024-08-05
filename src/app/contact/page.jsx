import Search from "../../components/common/searchBox";
import CommentBox from "../../components/HOC/commentBox";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 gap-10">
      <Search />
      <CommentBox />
    </div>
  );
}
