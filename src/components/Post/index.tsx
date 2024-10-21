import { PostCard } from "./styles";

interface PostProps {
  id: number
  title: string
  body: string
}

export function Post({ id, title, body }: PostProps) {
  return (
    <a href={`/${id}`}>
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