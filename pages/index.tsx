import Form from "@/components/Form";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
        <Header label={"Home"} />
        <Form postId="2" placeholder="What's happening" />
     </>
  )
}
