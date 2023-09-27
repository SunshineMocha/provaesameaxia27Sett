export interface BooksObj {
  count: number
  next: string
  previous: any
  results: Book[]
}

export interface Book {
  id: number
  title: string
  authors: Author[]
  translators: Translator[]
  subjects: string[]
  bookshelves: string[]
  languages: string[]
  copyright: boolean
  media_type: string
  formats: Formats
  download_count: number
}

export interface Author {
  name: string
  birth_year: number
  death_year: number
}

export interface Translator {
  name: string
  birth_year?: number
  death_year?: number
}

export interface Formats {
  "application/x-mobipocket-ebook": string
  "application/epub+zip": string
  "text/html": string
  "application/octet-stream"?: string
  "image/jpeg": string
  "text/plain"?: string
  "text/plain; charset=us-ascii"?: string
  "application/rdf+xml": string
  "text/html; charset=utf-8"?: string
  "text/plain; charset=utf-8"?: string
  "text/plain; charset=iso-8859-1"?: string
  "text/html; charset=iso-8859-1"?: string
  "text/html; charset=us-ascii"?: string
}
