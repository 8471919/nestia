/**
 * @packageDocumentation
 * @module api.functional.x.bbs.articles.comments
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection, Resolved, Primitive } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";
import type { Format } from "typia/lib/tags/Format";

import type { IBbsComment } from "../../../../../structures/IBbsComment";
import type { IPage } from "../../../../../structures/IPage";

/**
 * @controller BbsCommentsController.index
 * @path GET /x/bbs/:section/articles/:articleId/comments
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function index(
  connection: IConnection,
  section: string,
  articleId: string & Format<"uuid">,
  query: index.Query,
): Promise<index.Output> {
  return PlainFetcher.fetch(connection, {
    ...index.METADATA,
    template: index.METADATA.path,
    path: index.path(section, articleId, query),
  });
}
export namespace index {
  export type Query = Resolved<IPage.IRequest>;
  export type Output = Primitive<IPage<IBbsComment>>;

  export const METADATA = {
    method: "GET",
    path: "/x/bbs/:section/articles/:articleId/comments",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (
    section: string,
    articleId: string & Format<"uuid">,
    query: index.Query,
  ) => {
    const variables: URLSearchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query as any))
      if (undefined === value) continue;
      else if (Array.isArray(value))
        value.forEach((elem: any) => variables.append(key, String(elem)));
      else variables.set(key, String(value));
    const location: string = `/x/bbs/${encodeURIComponent(section?.toString() ?? "null")}/articles/${encodeURIComponent(articleId?.toString() ?? "null")}/comments`;
    return 0 === variables.size
      ? location
      : `${location}?${variables.toString()}`;
  };
}

/**
 * @controller BbsCommentsController.at
 * @path GET /x/bbs/:section/articles/:articleId/comments/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function at(
  connection: IConnection,
  section: string,
  articleId: string & Format<"uuid">,
  id: string & Format<"uuid">,
): Promise<at.Output> {
  return PlainFetcher.fetch(connection, {
    ...at.METADATA,
    template: at.METADATA.path,
    path: at.path(section, articleId, id),
  });
}
export namespace at {
  export type Output = Primitive<IBbsComment>;

  export const METADATA = {
    method: "GET",
    path: "/x/bbs/:section/articles/:articleId/comments/:id",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (
    section: string,
    articleId: string & Format<"uuid">,
    id: string & Format<"uuid">,
  ) =>
    `/x/bbs/${encodeURIComponent(section?.toString() ?? "null")}/articles/${encodeURIComponent(articleId?.toString() ?? "null")}/comments/${encodeURIComponent(id?.toString() ?? "null")}`;
}

/**
 * @controller BbsCommentsController.store
 * @path POST /x/bbs/:section/articles/:articleId/comments
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function store(
  connection: IConnection,
  section: string,
  articleId: string & Format<"uuid">,
  input: store.Input,
): Promise<store.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...store.METADATA,
      template: store.METADATA.path,
      path: store.path(section, articleId),
    },
    input,
  );
}
export namespace store {
  export type Input = Resolved<IBbsComment.IStore>;
  export type Output = Primitive<IBbsComment>;

  export const METADATA = {
    method: "POST",
    path: "/x/bbs/:section/articles/:articleId/comments",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 201,
  } as const;

  export const path = (section: string, articleId: string & Format<"uuid">) =>
    `/x/bbs/${encodeURIComponent(section?.toString() ?? "null")}/articles/${encodeURIComponent(articleId?.toString() ?? "null")}/comments`;
}

/**
 * @controller BbsCommentsController.update
 * @path PUT /x/bbs/:section/articles/:articleId/comments/:id
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function update(
  connection: IConnection,
  section: string,
  articleId: string & Format<"uuid">,
  id: string & Format<"uuid">,
  input: update.Input,
): Promise<update.Output> {
  return PlainFetcher.fetch(
    {
      ...connection,
      headers: {
        ...connection.headers,
        "Content-Type": "application/json",
      },
    },
    {
      ...update.METADATA,
      template: update.METADATA.path,
      path: update.path(section, articleId, id),
    },
    input,
  );
}
export namespace update {
  export type Input = Resolved<IBbsComment.IStore>;
  export type Output = Primitive<IBbsComment>;

  export const METADATA = {
    method: "PUT",
    path: "/x/bbs/:section/articles/:articleId/comments/:id",
    request: {
      type: "application/json",
      encrypted: false,
    },
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = (
    section: string,
    articleId: string & Format<"uuid">,
    id: string & Format<"uuid">,
  ) =>
    `/x/bbs/${encodeURIComponent(section?.toString() ?? "null")}/articles/${encodeURIComponent(articleId?.toString() ?? "null")}/comments/${encodeURIComponent(id?.toString() ?? "null")}`;
}
