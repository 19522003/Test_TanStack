export interface Student {
  id: number
  first_name: string
  last_name: string
  avatar: string
  email: string
  gender: string
  country: string
  btc_address: string
}

export type Students = Pick<Student, 'id' | 'email' | 'avatar' | 'last_name'>[]
