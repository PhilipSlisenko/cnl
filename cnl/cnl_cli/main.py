import typer

from cnl import cnl_run

app = typer.Typer()


# @app.command("run")
def cnl_run_command(module_path: str):
    cnl_run(module_path)


def main():
    typer.run(cnl_run_command)


if __name__ == "__main__":
    main()
    # typer.run(cnl_run_command)
