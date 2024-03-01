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
  static count = 0;

  public readonly execution_no: number;
  public readonly script_name: string
  public readonly script: string
  public readonly result: string
  public readonly input_script: string | null

  public constructor(script_name: string, script: string, result: string, input_script: string | null = null) {
    this.execution_no = ExecutionResult.count++;
    console.log(this.execution_no)
    this.script_name = script_name
    this.script = script
    this.result = result
    this.input_script = input_script
  }
}