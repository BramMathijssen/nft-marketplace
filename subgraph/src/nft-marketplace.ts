import {BigInt, Address} from "@graphprotocol/graph-ts";
import {
  ItemBought as ItemBoughtEvent,
  ItemCanceled as ItemCanceledEvent,
  ItemListed as ItemListedEvent
} from "../generated/NftMarketplace/NftMarketplace"
import { ItemBought, ItemCanceled, ItemListed } from "../generated/schema"

export function handleItemBought(event: ItemBoughtEvent): void {
  // Save that event in our graph
  // Update our activeitems

  // Get or create an itemlisted object
  // Each item needs an unique id
}

export function handleItemCanceled(event: ItemCanceledEvent): void {}

export function handleItemListed(event: ItemListedEvent): void {}
