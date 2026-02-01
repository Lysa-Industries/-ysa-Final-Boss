{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "matura-angielski-shell";

  buildInputs = with pkgs; [
    nodejs_24
    bun
    yarn
    git
    gnumake
    coreutils
    which
  ];

  shellHook = ''
    export PATH="$PWD/node_modules/.bin:$PATH"

    export NPM_CONFIG_USERCONFIG="$PWD/.npmrc"

    echo "Entered nix-shell for matura-angielski"

    if command -v node >/dev/null 2>&1; then
      echo "Node: $(node --version)"
    else
      echo "Node not available in the shell"
    fi

    if command -v yarn >/dev/null 2>&1; then
      echo "yarn: $(yarn --version)"
    else
      echo "yarn not available in the shell"
    fi

    if command -v bun >/dev/null 2>&1; then
      echo "bun: $(bun --version)"
    else
      echo "bun not available in the shell"
    fi

    if [ -f package.json ] && [ ! -d node_modules ]; then
      echo ""
      echo "No node_modules/ directory found. Run 'yarn' to install dependencies."
      echo ""
    fi

    echo "To start development: run 'yarn' then 'yarn start' (or use 'bun' commands if you prefer)"
  '';
}
