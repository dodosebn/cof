/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { Route as rootRouteImport } from './routes/__root'
import { Route as GiftcardRouteImport } from './routes/giftcard'
import { Route as FeaturesRouteImport } from './routes/features'
import { Route as DonateRouteImport } from './routes/donate'
import { Route as IndexRouteImport } from './routes/index'

const GiftcardRoute = GiftcardRouteImport.update({
  id: '/giftcard',
  path: '/giftcard',
  getParentRoute: () => rootRouteImport,
} as any)
const FeaturesRoute = FeaturesRouteImport.update({
  id: '/features',
  path: '/features',
  getParentRoute: () => rootRouteImport,
} as any)
const DonateRoute = DonateRouteImport.update({
  id: '/donate',
  path: '/donate',
  getParentRoute: () => rootRouteImport,
} as any)
const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/donate': typeof DonateRoute
  '/features': typeof FeaturesRoute
  '/giftcard': typeof GiftcardRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/donate': typeof DonateRoute
  '/features': typeof FeaturesRoute
  '/giftcard': typeof GiftcardRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/donate': typeof DonateRoute
  '/features': typeof FeaturesRoute
  '/giftcard': typeof GiftcardRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/donate' | '/features' | '/giftcard'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/donate' | '/features' | '/giftcard'
  id: '__root__' | '/' | '/donate' | '/features' | '/giftcard'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DonateRoute: typeof DonateRoute
  FeaturesRoute: typeof FeaturesRoute
  GiftcardRoute: typeof GiftcardRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/giftcard': {
      id: '/giftcard'
      path: '/giftcard'
      fullPath: '/giftcard'
      preLoaderRoute: typeof GiftcardRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/features': {
      id: '/features'
      path: '/features'
      fullPath: '/features'
      preLoaderRoute: typeof FeaturesRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/donate': {
      id: '/donate'
      path: '/donate'
      fullPath: '/donate'
      preLoaderRoute: typeof DonateRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DonateRoute: DonateRoute,
  FeaturesRoute: FeaturesRoute,
  GiftcardRoute: GiftcardRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
