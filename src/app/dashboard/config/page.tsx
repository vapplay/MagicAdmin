'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Edit } from 'lucide-react'
import { toast } from 'sonner'

interface Banner {
  id: number
  url: string
  name: string
}

interface Price {
  id: number
  usd: number
  cop: number
  brl: number
}

interface PackagePrice {
  id: number
  comboNumber: number
  usd: number
  cop: number
  brl: number
  combo: number
}

const MAX_BANNERS = 4
const MAX_PRICES = 2
const MAX_PACKAGE_PRICES = 4

const ConfigPage = () => {
  const [banners, setBanners] = useState<Banner[]>([
    { id: 1, url: 'https://example.com/banner1.jpg', name: 'Banner 1' },
    { id: 2, url: 'https://example.com/banner2.jpg', name: 'Banner 2' },
  ])

  const [prices, setPrices] = useState<Price[]>([
    { id: 1, usd: 10, cop: 40000, brl: 50 },
  ])

  const [packagePrices, setPackagePrices] = useState<PackagePrice[]>([
    { id: 1, comboNumber: 1, usd: 20, cop: 80000, brl: 100, combo: 1000 },
    { id: 2, comboNumber: 2, usd: 50, cop: 200000, brl: 250, combo: 3000 },
  ])

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isEditBannerModalOpen, setIsEditBannerModalOpen] = useState(false)
  const [isEditPriceModalOpen, setIsEditPriceModalOpen] = useState(false)
  const [isEditPackagePriceModalOpen, setIsEditPackagePriceModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState<Banner | Price | PackagePrice | null>(null)

  const handleEdit = (item: Banner | Price | PackagePrice) => {
    setEditingItem(item)
    if ('url' in item) {
      setIsEditBannerModalOpen(true)
    } else if ('cop' in item && !('combo' in item)) {
      setIsEditPriceModalOpen(true)
    } else {
      setIsEditPackagePriceModalOpen(true)
    }
  }

  const addBanner = (newBanner: Omit<Banner, 'id'>) => {
    if (banners.length >= MAX_BANNERS) {
      toast("Cannot add more banners");
      return
    }
    setBanners([...banners, { ...newBanner, id: banners.length + 1 }])
  }

  const addPrice = () => {
    if (prices.length >= MAX_PRICES) {
      toast("Cannot add more prices");
      return
    }
    setPrices([...prices, { id: prices.length + 1, usd: 0, cop: 0, brl: 0 }])
  }

  const addPackagePrice = () => {
    if (packagePrices.length >= MAX_PACKAGE_PRICES) {
      toast("Cannot add more package prices");
      return
    }
    setPackagePrices([...packagePrices, { id: packagePrices.length + 1, comboNumber: packagePrices.length + 1, usd: 0, cop: 0, brl: 0, combo: 0 }])
  }

  return (
    <div className="container mx-auto p-4">
      <Dialog open={isAddModalOpen} onOpenChange={setIsAddModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Banner</DialogTitle>
          </DialogHeader>
          <form onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.currentTarget)
            const newBanner = {
              name: formData.get('name') as string,
              url: formData.get('url') as string,
            }
            addBanner(newBanner)
            setIsAddModalOpen(false)
          }}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input id="name" name="name" className="col-span-3" required />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="url" className="text-right">
                  URL
                </Label>
                <Input id="url" name="url" className="col-span-3" required />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Add Banner</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Banner Images ({banners.length}/{MAX_BANNERS})</CardTitle>
          <Button onClick={() => setIsAddModalOpen(true)} disabled={banners.length >= MAX_BANNERS}>
            <Plus className="mr-2 h-4 w-4" /> Add New Banner
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Preview</TableHead>
                <TableHead className="w-1/4">Name</TableHead>
                <TableHead>URL</TableHead>
                <TableHead className="w-[100px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {banners.map((banner) => (
                <TableRow key={banner.id}>
                  <TableCell>
                    <img src={banner.url} alt="Banner preview" className="w-20 h-20 object-cover" />
                  </TableCell>
                  <TableCell>{banner.name}</TableCell>
                  <TableCell className="truncate max-w-xs">{banner.url}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => handleEdit(banner)}>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Prices ({prices.length}/{MAX_PRICES})</CardTitle>
          <Button onClick={addPrice} disabled={prices.length >= MAX_PRICES}>
            <Plus className="mr-2 h-4 w-4" /> Add Price
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4">USD 🇺🇸</TableHead>
                <TableHead className="w-1/4">COP 🇨🇴</TableHead>
                <TableHead className="w-1/4">BRL 🇧🇷</TableHead>
                <TableHead className="w-[100px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {prices.map((price) => (
                <TableRow key={price.id}>
                  <TableCell>${price.usd.toFixed(2)}</TableCell>
                  <TableCell>COP {price.cop.toLocaleString()}</TableCell>
                  <TableCell>R$ {price.brl.toFixed(2)}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => handleEdit(price)}>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Package Prices ({packagePrices.length}/{MAX_PACKAGE_PRICES})</CardTitle>
          <Button onClick={addPackagePrice} disabled={packagePrices.length >= MAX_PACKAGE_PRICES}>
            <Plus className="mr-2 h-4 w-4" /> Add Package Price
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/6">Combo Number</TableHead>
                <TableHead className="w-1/6">USD 🇺🇸</TableHead>
                <TableHead className="w-1/6">COP 🇨🇴</TableHead>
                <TableHead className="w-1/6">BRL 🇧🇷</TableHead>
                <TableHead className="w-1/6">Combo</TableHead>
                <TableHead className="w-[100px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {packagePrices.map((packagePrice) => (
                <TableRow key={packagePrice.id}>
                  <TableCell>{packagePrice.comboNumber}</TableCell>
                  <TableCell>${packagePrice.usd.toFixed(2)}</TableCell>
                  <TableCell>COP {packagePrice.cop.toLocaleString()}</TableCell>
                  <TableCell>R$ {packagePrice.brl.toFixed(2)}</TableCell>
                  <TableCell>{packagePrice.combo}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" onClick={() => handleEdit(packagePrice)}>
                      <Edit className="mr-2 h-4 w-4" /> Edit
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={isEditBannerModalOpen} onOpenChange={setIsEditBannerModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Banner</DialogTitle>
          </DialogHeader>
          {editingItem && 'url' in editingItem && (
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              const updatedBanner = {
                ...editingItem,
                name: formData.get('name') as string,
                url: formData.get('url') as string
              }
              setBanners(banners.map(b => b.id === updatedBanner.id ? updatedBanner : b))
              setIsEditBannerModalOpen(false)
            }}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-name" className="text-right">
                    Name
                  </Label>
                  <Input id="edit-name" name="name" defaultValue={editingItem.name} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="edit-url" className="text-right">
                    URL
                  </Label>
                  <Input id="edit-url" name="url" defaultValue={editingItem.url} className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save Changes</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={isEditPriceModalOpen} onOpenChange={setIsEditPriceModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Price</DialogTitle>
          </DialogHeader>
          {editingItem && 'usd' in editingItem && !('combo' in editingItem) && (
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              const updatedPrice = {
                ...editingItem,
                usd: parseFloat(formData.get('usd') as string),
                cop: parseFloat(formData.get('cop') as string),
                brl: parseFloat(formData.get('brl') as string)
              }
              setPrices(prices.map(p => p.id === updatedPrice.id ? updatedPrice : p))
              setIsEditPriceModalOpen(false)
            }}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="usd" className="text-right">
                    USD
                  </Label>
                  <Input id="usd" name="usd" type="number" defaultValue={editingItem.usd} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="cop" className="text-right">
                    COP
                  </Label>
                  <Input id="cop" name="cop" type="number" defaultValue={editingItem.cop} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="brl" className="text-right">
                    BRL
                  </Label>
                  <Input id="brl" name="brl" type="number" defaultValue={editingItem.brl} className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save Changes</Button>
              </DialogFooter>
            </form>)}
        </DialogContent>
      </Dialog>

      <Dialog open={isEditPackagePriceModalOpen} onOpenChange={setIsEditPackagePriceModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Package Price</DialogTitle>
          </DialogHeader>
          {editingItem && 'combo' in editingItem && (
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.currentTarget)
              const updatedPackagePrice = {
                ...editingItem,
                comboNumber: parseInt(formData.get('comboNumber') as string),
                usd: parseFloat(formData.get('usd') as string),
                cop: parseFloat(formData.get('cop') as string),
                brl: parseFloat(formData.get('brl') as string),
                combo: parseInt(formData.get('combo') as string)
              }
              setPackagePrices(packagePrices.map(p => p.id === updatedPackagePrice.id ? updatedPackagePrice : p))
              setIsEditPackagePriceModalOpen(false)
            }}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="comboNumber" className="text-right">
                    Combo Number
                  </Label>
                  <Input id="comboNumber" name="comboNumber" type="number" defaultValue={editingItem.comboNumber} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="usd" className="text-right">
                    USD 🇺🇸
                  </Label>
                  <Input id="usd" name="usd" type="number" defaultValue={editingItem.usd} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="cop" className="text-right">
                    COP 🇨🇴
                  </Label>
                  <Input id="cop" name="cop" type="number" defaultValue={editingItem.cop} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="brl" className="text-right">
                    BRL 🇧🇷
                  </Label>
                  <Input id="brl" name="brl" type="number" defaultValue={editingItem.brl} className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="combo" className="text-right">
                    Combo
                  </Label>
                  <Input id="combo" name="combo" type="number" defaultValue={editingItem.combo} className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save Changes</Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ConfigPage

