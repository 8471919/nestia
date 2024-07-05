import type { Format } from "typia/lib/tags/Format";

export type IPartialInterface = {
  a?: undefined | string;
  email?: null | undefined | (string & Format<"email">);
  created_at?: null | undefined | (string & Format<"date-time">);
  original_optional?: undefined | boolean;
  undefinable_attr?: undefined | string;
};
