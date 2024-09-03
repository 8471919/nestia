/**
 * @packageDocumentation
 * @module api.functional.performance
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

import type { IPerformance } from "../../structures/IPerformance";

/**
 * @controller PerformanceController.get
 * @path GET /performance
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(connection: IConnection): Promise<get.Output> {
  return PlainFetcher.fetch(connection, {
    ...get.METADATA,
    template: get.METADATA.path,
    path: get.path(),
  });
}
export namespace get {
  export type Output = Primitive<IPerformance>;

  export const METADATA = {
    method: "GET",
    path: "/performance",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = () => "/performance";
}
