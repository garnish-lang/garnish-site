export class AppScript {
  private _name: string = ''
  private _script: string = ''

  public constructor(name) {
    this._name = name
  }

  public get name(): string {
    return this._name
  }

  public set name(name: string) {
    this._name = name
  }

  public get script(): string {
    return this._script
  }

  public set script(script: string) {
    this._script = script
  }
}

export class ExecutionResult {
  public readonly _script_name: string
  public readonly _script: string
  public readonly _result: string

  public constructor(script_name: string, script: string, result: string) {
    this._script_name = script_name
    this._script = script
    this._result = result
  }
}