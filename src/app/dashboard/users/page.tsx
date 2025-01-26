"use client"

import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"

type User = {
  id: number
  name: string
  email: string
  isPremium: boolean
}

export default function page() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", isPremium: false },
    { id: 2, name: "Bob Smith", email: "bob@example.com", isPremium: true },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", isPremium: false },
    { id: 4, name: "Diana Prince", email: "diana@example.com", isPremium: true },
  ])

  const togglePremium = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, isPremium: !user.isPremium } : user
    ))
  }

  return (
    <div className="container mx-auto py-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Estado Premium</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={user.isPremium}
                    onCheckedChange={() => togglePremium(user.id)}
                  />
                  <span>{user.isPremium ? "Activado" : "Desactivado"}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

