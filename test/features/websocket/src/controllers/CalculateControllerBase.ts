import core from "@nestia/core";
import { Controller } from "@nestjs/common";
import { Driver, WebSocketAcceptor } from "tgrid";

import { ICalculator } from "@api/lib/structures/ICalculator";
import { IListener } from "@api/lib/structures/IListener";
import { IPrecision } from "@api/lib/structures/IPrecision";

export function CalculateControllerBase(path: string) {
  @Controller(path)
  abstract class CalculateControllerBase {
    @core.WebSocketRoute()
    public async connect(
      @core.WebSocketRoute.Acceptor()
      acceptor: WebSocketAcceptor<IPrecision, ICalculator, IListener>,
      @core.WebSocketRoute.Driver()
      driver: Driver<IListener>,
    ): Promise<void> {
      await acceptor.accept({
        plus: (x, y) => {
          const z: number = x + y;
          driver.on({ operator: "plus", x, y, z }).catch(() => {});
          return z;
        },
        minus: (x, y) => {
          const z: number = x - y;
          driver.on({ operator: "minus", x, y, z }).catch(() => {});
          return z;
        },
        multiply: (x, y) => {
          const z: number = x * y;
          driver.on({ operator: "multiply", x, y, z }).catch(() => {});
          return z;
        },
        divide: (x, y) => {
          const z: number = x / y;
          driver.on({ operator: "divide", x, y, z }).catch(() => {});
          return z;
        },
      });
    }
  }
  return CalculateControllerBase;
}
