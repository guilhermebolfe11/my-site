import getUserLocale from 'get-user-locale'
import { getNotFoundContent } from './config'

export default function NotFound() {
  const content = getNotFoundContent(getUserLocale())
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tight">
        {content.title}
      </h1>
      <p className="mb-4">{content.text}</p>
    </section>
  )
}
