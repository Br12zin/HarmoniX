import * as React from "react";

import Button  from "@/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import  Input  from "@/components/Input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function CardWithForm() {
  return (
    <div className="">
      <Card className="h-[600px] w-[500px]">
        <CardHeader>
          <CardTitle className="border-b-2 border-black">
            <p className="mb-2">Finalizar Compra</p>
          </CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Digite seu nome" />
                <Label htmlFor="name">Sobrenome</Label>
                <Input id="name" placeholder="Digite seu sobrenome" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">
                  Selecione o método de pagamento
                </Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button btn="bg-slate-600">Cancel</Button>
          <Button>Concluir</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
