import { useState, useEffect, SetStateAction, useRef } from 'react'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

interface Post {
  id: number
  title: string
}

export const Index = () => {
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState(0)

  const abortControllerRef = useRef<AbortController | null>(null)

  useEffect(() => {
    const fetchPost = async () => {
      abortControllerRef.current?.abort()
      abortControllerRef.current = new AbortController()

      setIsLoading(true)

      try {
        const res = await fetch(`${BASE_URL}/posts?page={page}`, {
          signal: abortControllerRef.current.signal,
        })
        const posts = (await res.json()) as Post[]
        setPosts(posts)
      } catch (e) {
        if (e instanceof Error && e.name === 'AbortError') {
          console.log('Aborted')
          return
        }

        setError(e as unknown as SetStateAction<undefined>)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPost()
  }, [page])

  if (error) {
    return <div>Something went wrong</div>
  }

  return (
    <div className="data-fetching-tutorial p-10">
      <h1 className="mb-4 text-2xl">Data Fetching in React</h1>
      <button
        className="bg-cyan-500 px-4 py-2 rounded-lg mb-4"
        onClick={() => setPage(page + 1)}
      >
        Increase Page {page}
      </button>
      {isLoading && <div>Loading...</div>}
      {!isLoading && (
        <ul>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>
          })}
        </ul>
      )}
    </div>
  )
}
