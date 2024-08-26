'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { signOut } from 'next-auth/react';
import { IoPersonOutline } from 'react-icons/io5';

export default function User() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="overflow-hidden rounded-full border-2 p-1"
        >
          <IoPersonOutline size={24} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          Mi perfil
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Configuración
        </DropdownMenuItem>
        <DropdownMenuItem>
          Ayuda
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <button
            onClick={() => signOut()}
            className="w-full text-left"
          >
            Cerrar sesión
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}