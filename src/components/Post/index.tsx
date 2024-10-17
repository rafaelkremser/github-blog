import { PostCard } from "./styles";

interface PostProps {
  title: string
  body: string
}

export function Post({ title, body }: PostProps) {
  return (
    <a href="">
      <PostCard>
        <header>
          <h1>{title}</h1>
          <span>Há 1 dia</span>
        </header>
        <p>{body}</p>
      </PostCard>
    </a>
  )
}