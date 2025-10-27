import { useState } from "react";
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  MapPin,
  Calendar,
  Star,
  MoreVertical,
  Filter,
  Search,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/buttonshadcn";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import tecladoCasio1 from "@/public/img/tecladoCasio1.png";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const [cartItems, setCartItems] = useState(3);
  const [filterStatus, setFilterStatus] = useState("all");

  // Mock data dos pedidos
  const orders = [
    {
      id: "MP001",
      status: "delivered",
      date: "2024-01-15",
      total: 2499.0,
      items: [
        {
          name: "Guitarra Elétrica Les Paul Premium",
          image: tecladoCasio1,
          price: 2499.0,
          quantity: 1,
          brand: "Gibson",
        },
      ],
      trackingCode: "BR123456789",
      deliveryDate: "2024-01-20",
      rating: null,
    },
    {
      id: "MP002",
      status: "shipped",
      date: "2024-01-22",
      total: 3299.0,
      items: [
        {
          name: "Piano Digital 88 Teclas Profissional",
          image: tecladoCasio1,
          price: 3299.0,
          quantity: 1,
          brand: "Yamaha",
        },
      ],
      trackingCode: "BR987654321",
      estimatedDelivery: "2024-01-28",
    },
    {
      id: "MP003",
      status: "processing",
      date: "2024-01-25",
      total: 1899.0,
      items: [
        {
          name: "Bateria Acústica Completa Premium",
          image: tecladoCasio1,
          price: 1899.0,
          quantity: 1,
          brand: "Pearl",
        },
      ],
    },
    {
      id: "MP004",
      status: "pending",
      date: "2024-01-26",
      total: 849.0,
      items: [
        {
          name: "Guitarra Acústica Folk",
          image: tecladoCasio1,
          price: 849.0,
          quantity: 1,
          brand: "Fender",
        },
      ],
    },
  ];

  const getStatusConfig = (status: string) => {
    const configs = {
      pending: {
        label: "Aguardando Pagamento",
        color: "bg-warning text-warning-foreground",
        icon: Clock,
        description: "Confirme o pagamento para prosseguir",
      },
      processing: {
        label: "Preparando Envio",
        color: "bg-info text-info-foreground",
        icon: Package,
        description: "Separando produtos para envio",
      },
      shipped: {
        label: "Em Trânsito",
        color: "bg-primary text-primary-foreground",
        icon: Truck,
        description: "Produto a caminho do destino",
      },
      delivered: {
        label: "Entregue",
        color: "bg-success text-success-foreground",
        icon: CheckCircle,
        description: "Produto entregue com sucesso",
      },
    };
    return configs[status as keyof typeof configs] || configs.pending;
  };

  const filteredOrders =
    filterStatus === "all"
      ? orders
      : orders.filter((order) => order.status === filterStatus);

  return (
    <div className="min-h-screen">
      {/* Header */}

      {/* Page Header */}
      <div className="border-b border-border border-gray-400 px-4 py-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-playfair mb-2 text-3xl font-bold text-foreground">
            Meus Pedidos
          </h1>
          <p className="text-muted-foreground">
            Acompanhe seus instrumentos musicais e histórico de compras
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-6 pb-20">
        {/* Filters and Search */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar pedidos..."
              className="transition-smooth border-muted bg-muted/50 pl-10 focus:bg-background"
            />
          </div>

          <Tabs defaultValue="all" className="w-full sm:w-auto">
            <TabsList className="grid w-full grid-cols-2 bg-muted/50 sm:grid-cols-5">
              <TabsTrigger value="all" onClick={() => setFilterStatus("all")}>
                Todos
              </TabsTrigger>
              <TabsTrigger
                value="pending"
                onClick={() => setFilterStatus("pending")}
              >
                Pendente
              </TabsTrigger>
              <TabsTrigger
                value="processing"
                onClick={() => setFilterStatus("processing")}
              >
                Preparando
              </TabsTrigger>
              <TabsTrigger
                value="shipped"
                onClick={() => setFilterStatus("shipped")}
              >
                Enviado
              </TabsTrigger>
              <TabsTrigger
                value="delivered"
                onClick={() => setFilterStatus("delivered")}
              >
                Entregue
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.length === 0 ? (
            <Card className="py-12 text-center">
              <CardContent>
                <Package className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <h3 className="font-playfair mb-2 text-xl font-semibold">
                  Nenhum pedido encontrado
                </h3>
                <p className="mb-6 text-muted-foreground">
                  {filterStatus === "all"
                    ? "Você ainda não fez nenhum pedido conosco."
                    : "Nenhum pedido encontrado com este status."}
                </p>
                <Button variant="cta">Explorar Instrumentos</Button>
              </CardContent>
            </Card>
          ) : (
            filteredOrders.map((order) => {
              const statusConfig = getStatusConfig(order.status);
              const StatusIcon = statusConfig.icon;

              return (
                <Card
                  key={order.id}
                  className="hover:shadow-floating transition-smooth overflow-hidden shadow-card"
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <CardTitle className="font-playfair text-lg text-primary">
                            Pedido #{order.id}
                          </CardTitle>
                          <Badge className={statusConfig.color}>
                            <StatusIcon className="mr-1 h-3 w-3" />
                            {statusConfig.label}
                          </Badge>
                        </div>

                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(order.date).toLocaleDateString("pt-BR")}
                          </div>
                          {order.trackingCode && (
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              Código: {order.trackingCode}
                            </div>
                          )}
                        </div>

                        <p className="text-sm text-muted-foreground">
                          {statusConfig.description}
                        </p>
                      </div>

                      <Button variant="ghost" size="icon">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Order Items */}
                    <div className="space-y-3">
                      {order.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 rounded-lg bg-muted/30 p-3"
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            className="h-16 w-16 rounded-md object-cover"
                          />

                          <div className="min-w-0 flex-1">
                            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                              {item.brand}
                            </p>
                            <h4 className="mb-1 line-clamp-2 font-medium text-foreground">
                              {item.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              Qtd: {item.quantity}
                            </p>
                          </div>

                          <div className="text-right">
                            <p className="font-semibold text-primary">
                              R${" "}
                              {item.price.toLocaleString("pt-BR", {
                                minimumFractionDigits: 2,
                              })}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order Summary & Actions */}
                    <div className="flex items-center justify-between border-t border-border pt-4">
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground">
                          Total do pedido
                        </p>
                        <p className="font-playfair text-2xl font-bold text-primary">
                          R${" "}
                          {order.total.toLocaleString("pt-BR", {
                            minimumFractionDigits: 2,
                          })}
                        </p>

                        {order.estimatedDelivery && (
                          <p className="text-success text-sm font-medium">
                            📦 Entrega prevista:{" "}
                            {new Date(
                              order.estimatedDelivery,
                            ).toLocaleDateString("pt-BR")}
                          </p>
                        )}

                        {order.deliveryDate && (
                          <p className="text-success text-sm font-medium">
                            ✅ Entregue em{" "}
                            {new Date(order.deliveryDate).toLocaleDateString(
                              "pt-BR",
                            )}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col gap-2">
                        {order.status === "shipped" && (
                          <Button
                            className="bg-success text-white"
                            variant="outline"
                            size="sm"
                          >
                            Rastrear Pedido
                          </Button>
                        )}

                        {order.status === "delivered" && !order.rating && (
                          <Button
                            className="text-muted-foreground"
                            variant="secondary"
                            size="sm"
                          >
                            <Star className="mr-1 h-4 w-4" />
                            Avaliar Compra
                          </Button>
                        )}

                        {order.status === "pending" && (
                          <Button
                            className="text-white"
                            variant="cta"
                            size="sm"
                          >
                            Pagar Agora
                          </Button>
                        )}

                        <Button
                          className="bg-muted/50 text-muted-foreground"
                          variant="ghost"
                          size="sm"
                        >
                          Ver Detalhes
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
};

export default Orders;
