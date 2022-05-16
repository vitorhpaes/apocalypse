# Apocalypse Challenge

# Requirements

- List survivors from a zombie apocalypse
- Show survivor details (page)
- Infect a survivor
- Search survivors by name or current status (infected or no)

# How to run

```
$ yarn or npm install
```

```
$ yarn server
```

- then open a new console and run

```
$ yarn start
```

### OS configuration (optional):

```
$ sudo gedit /etc/hosts
```

add following urls:

```
127.0.0.1 local.apocalypse.com.br
127.0.0.1 local.apocalypse.com.us
127.0.0.1 local.apocalypse.com.fr
```

If you don't want to configure, default location (pt-br) will be set at localhost:3000

# Code description

- At this project, we can use a specific site configuration for each "SiteBoot" provided.
- The code follow a huge typed and structured engine.
- With normalizers we can migrate backend to any new data structure, and also do partial migrate with services configuration runnig at the same time.
- With multi site provider, we can code specific rules for each site separator (country, brand, locale, user type and much more)
- Using Material UI styling library, we can build Design Systems and migrate the site easly, also using site separators if needed
- All objects possible constants and interfaces was coded inside system @config.
- Objects was coded using best performances practicess, using "useMemo", "memo", "useCallback"
- All site routes and messages was configured inside driver folder, respecting sites separators by locale
- Part of code is respecting git-flow, using features branches, develop to merge different feature codes and main to production
- Project use react-redux and react-context to manage states

# Future features

- deployment to heroku
- homepage tests
- details page tests
