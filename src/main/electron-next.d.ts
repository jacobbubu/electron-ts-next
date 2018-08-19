declare module 'electron-next' {
  function prepareNext(
    rendererPath:
      | string
      | {
          production: string
          development: string
        }
  ): Promise<any>
  export = prepareNext
}
