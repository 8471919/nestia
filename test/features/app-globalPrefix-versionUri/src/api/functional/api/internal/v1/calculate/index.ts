/**
 * @packageDocumentation
 * @module api.functional.api.internal.v1.calculate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { WebSocketConnector } from "tgrid";
import type { Driver } from "tgrid";

import type { ICalculator } from "../../../../../structures/ICalculator";
import type { IListener } from "../../../../../structures/IListener";
import type { IPrecision } from "../../../../../structures/IPrecision";

/**
 * @controller CalculateController.connect
 * @path /api/internal/v1/calculate
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function connect(
  connection: IConnection<connect.Header>,
  provider: connect.Provider,
): Promise<connect.Output> {
  const connector: WebSocketConnector<
    connect.Header,
    connect.Provider,
    connect.Listener
  > = new WebSocketConnector(connection.headers ?? ({} as any), provider);
  await connector.connect(
    `${connection.host.endsWith("/") ? connection.host.substring(0, connection.host.length - 1) : connection.host}${connect.path()}`,
  );
  const driver: Driver<connect.Listener> = connector.getDriver();
  return {
    connector,
    driver,
  };
}
export namespace connect {
  export type Output = {
    connector: WebSocketConnector<Header, Provider, Listener>;
    driver: Driver<Listener>;
  };
  export type Header = IPrecision;
  export type Provider = IListener;
  export type Listener = ICalculator;

  export const path = () => "/api/internal/v1/calculate";
}
