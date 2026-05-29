" ────────────────────────────────────────────────────────────────
"                        KEY MAPPINGS
" ────────────────────────────────────────────────────────────────

let mapleader = " "               " Space as leader key

nnoremap <leader>w :w<CR>
nnoremap <leader>q :q<CR>
nnoremap <leader>x :x<CR>
nnoremap <leader>t :NvimTreeToggle<CR>
nnoremap <leader>fq :q!<CR>

" Search for selected text in visual mode
vnoremap // y/\V<C-R>=escape(@",'/\')<CR><CR>
" automatically centre on page when searching
nnoremap n nzz
nnoremap p pzz
nnoremap N Nzz
nnoremap P Pzz

" Tab management
nnoremap <leader>1 1gt
nnoremap <leader>2 2gt
nnoremap <leader>3 3gt
nnoremap <leader>4 4gt
nnoremap <leader>5 5gt
nnoremap <leader>6 6gt
nnoremap <leader>7 7gt
nnoremap <leader>8 8gt
nnoremap <leader>9 9gt
nnoremap <leader>0 :tablast<CR>

nnoremap <leader><Right>    :tabnext<CR>
nnoremap <leader><Left>     :tabprevious<CR>

" Yank and delete expansion
nnoremap yl ^y$
nnoremap dl ^d$

" System clipboard copy and paste with standard keybinds - only in visual mode
vnoremap <C-c> "*y

" Faster terminal creation - might be able to be integrated with one of the popup plugins
nnoremap <leader>te :term<CR>

" Buffer management
nnoremap <leader><Up>   :bp<CR>
nnoremap <leader><Down> :bn<CR>
nnoremap <leader>bgg    :bfirst<CR>
nnoremap <leader>bG     :blast<CR>
" ────────────────────────────────────────────────────────────────
"                        BASIC SETTINGS
" ────────────────────────────────────────────────────────────────

set nocompatible                  " Required for modern Vim

set fileformats=dos               " Prefer DOS line endings

filetype off                      " Required before Vundle loads

set ruler                         " Show cursor position
set number                        " Show line numbers
set relativenumber                " Relative numbers for motion

syntax enable                     " Enable syntax highlighting
set regexpengine=0                " Use default regex engine

set expandtab                     " Convert tabs to spaces
set shiftwidth=4                  " Indent width
set tabstop=4                     " Tab display width
set smarttab                      " Smart tab behavior

set wrap                          " Wrap long lines
set lbr                           " Wrap at word boundaries
set tw=500                        " Text width (soft limit)

set ai                            " Auto indent
set si                            " Smart indent

set hlsearch                      " Highlight search matches
set incsearch                     " Highlight while typing search

set cursorline                    " Highlight current line

" set backspace=indent,eol,start    " Make backspace behave normally

" set scrolloff=5                   " Keep cursor away from edges
" set sidescrolloff=5

set showmatch                     " Highlight matching brackets
set showcmd                       " Show partial commands
set laststatus=2                  " Always show status line

" set splitbelow                    " Sensible splits
" set splitright

set wildmenu                      " Enhanced command-line completion
set wildmode=longest:full,full
set wildignore+=*.o,*.obj,*.pyc,*.class,*.swp,*.zip

" Allows undo even after closing files
set undofile
set undodir=~/.vim/undodir

" Integrate with system clipboard (if supported)
" set clipboard+=unnamedplus

set timeoutlen=200                " Time between mappping key presses
set ttimeoutlen=50                " Time between key codes

set list                          " Display spaces as a -
set lcs +=space:·                 " Display tabs as a dot
set lcs +=eol:⇃                   " Display EOL as return symbol

set ff?                           " Queries what file ending vim thinks the file should have
" ────────────────────────────────────────────────────────────────
"                        COLORSCHEME
" ────────────────────────────────────────────────────────────────

set background=dark
colorscheme catppuccin
