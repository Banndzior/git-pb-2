# Branch + merge

* [X] Otwórz okno konsoli/terminalu

Opcje:

* cmd.exe / powershell.exe
* Windows Terminal
* Terminal / Shell
* Visual Studio Code Terminal

* [X] Użyj istniejącego repozytorium git-pb

```dos
cd c:\pb\git-pb
```

* [X] Anuluj wszystkie zmiany jakie masz

```dos
git reset --hard
```

* [X] Stwórz plik (Windows używa notepad.exe / Unix - touch)

```dos
notepad lab-3.txt
```

* [X] Zmień plik 3-merge.md

Wpisz dowolny tekst i zapisz zmiany

* [X] Pobierz zmiany (moze sie nie udac)

```dos
git checkout main
git pull
```

* [X] Dodaj dowolny obrazek do katalogu git-pb (np. 1.jpg)
* [X] Usuń nieśledzone pliki ([https://coderwall.com/p/g16jpq/keep-your-git-directory-clean-with-git-clean-and-git-trash](https://coderwall.com/p/g16jpq/keep-your-git-directory-clean-with-git-clean-and-git-trash))

```dos
git clean -fd
git checkout 3-merge.md
```

* [ ] Pobierz zmiany ponownie

```dos
git pull
```

* [ ] Stwórz ponownie plik (Windows używa notepad.exe / Unix - touch) z wpisana 1 linia z loginem GitHub

```dos
notepad lab-3.txt
git add lab-3.txt
```

* [ ] Odłóż zmiany na półkę (plik zniknie)

```dos
git stash push
```

* [ ] Wypisz listę zapamiętanych zmian

```dos
git stash list
```

* [ ] Stwórz branch o nazwie: 'feat/' + login GitHub (male litery)

```dos
git checkout -b feat/twoj-login-github
```

* [ ] Przywróć zmiany i stwórz commit

```dos
git stash pop
git add .
git commit -m "Moj plik z feature"
```

* [ ] Zedytuj commit (dodaj kolejna linie z nazwa branch'a do pliku)

```dos
notepad lab-3.txt
git add .
git commit --amend --no-edit
```

* [ ] Wróć na branch main i stwórz kolejne branche

```dos
git checkout main
git checkout -b rebase/twoj-login-github
git checkout -b hotfix/twoj-login-github
```

* [ ] Stwórz ponownie plik (Windows używa notepad.exe / Unix - touch) z wpisanym paragrafem lorem ipsum ([https://loremipsum.io/](https://loremipsum.io/))

```dos
notepad lab-3.txt
git add lab-3.txt
```

* [ ] Stwórz commit na hotfix/twoj-login-github

```dos
git commit -m "Moj plik z hotfix"
```

* [ ] Połącz branch feat/twoj-login-github z main (no conflicts, fast-forward)

```dos
git checkout main
git merge feat/twoj-login-github
```

* [ ] Porównaj branch hotfix/twoj-login-github z feat/twoj-login-github (conflicts, merge commit)

```dos
git diff feat/twoj-login-github hotfix/twoj-login-github
```

* [ ] Połącz branch hotfix/twoj-login-github z feat/twoj-login-github (conflicts, merge commit)

```dos
git checkout feat/twoj-login-github
git merge hotfix/twoj-login-github
```

* [ ] Wroc na branch hotfix/twoj-login-github i stworz commit odwracajacy zmiany (skopiuj id commita z konsoli)

```dos
git checkout hotfix/twoj-login-github
git rev-parse HEAD
git revert <commit-id>
``'
blblblblblb

* [ ] Wyslij swoje 2 branche na serwer (ew. set-upstream jak podpowie konsola git)

```dos
git push origin hotfix/twoj-login-github
git push origin feat/twoj-login-github
```

* [ ] Znajdz commit, w ktorym byl dodany katalog z twoj-login-github i jego zawartosc

```dos
git rev-list --all --pretty=oneline -- "*/twoj-login-github*"
```

* [ ] Zaimportuj commit do swojego branch feat/twoj-login-github

```dos
git checkout feat/twoj-login-github
git cherry-pick <commit-id>
```

* [ ] Stwórz Pull Request ze zmian na feat/twoj-login-github na stronie GitHub

`https://github.com/Banndzior/git-pb/compare`

* [ ] Dodaj plik lab.txt

```dos
notepad lab.txt
```

* [ ] Zmodyfikuj plik git ignore i dodaj do niego lab.txt
(<https://gist.github.com/andreasonny83/b24e38b7772a3ea362d8e8d238d5a7bc> lub
<https://www.toptal.com/developers/gitignore/api/node,sublimetext,windows,macos,sass> lub
<https://github.com/github/gitignore>)
* [ ] Zrob commit z git ignore i wyslij zmiany na serwer
* [ ] Dodaj plik test-rebase.txt z zawartoscia do brancha rebase/twoj-login-github

```dos
git checkout rebase/twoj-login-github
notepad test-rebase.txt
git add test-rebase.txt
git commit -m "Moj plik do rebase"
git rebase main
```

* [ ] Zrob rebase brancha rebase/twoj-login-github z main

```dos
git rebase main
```
