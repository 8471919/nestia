/**
 * @packageDocumentation
 * @module api.functional.performance
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Primitive } from "@nestia/fetcher";
import { EncryptedFetcher } from "@nestia/fetcher/lib/EncryptedFetcher";

import type { IPerformance } from "../../structures/IPerformance";

/**
 * @controller PerformanceController.get
 * @path GET /performance
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function get(connection: IConnection): Promise<get.Output> {
  return EncryptedFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...get.METADATA,
      template: get.METADATA.path,
      path: get.path(),
    },
  );
}
export namespace get {
  export type Output = Primitive<IPerformance>;

  export const METADATA = {
    method: "GET",
    path: "/performance",
    request: null,
    response: {
      type: "text/plain",
      encrypted: true,
    },
    status: 200,
  } as const;

  export const path = () => "/performance";
}
