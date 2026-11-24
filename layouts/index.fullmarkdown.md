# {{ .Site.Title }}

## Contents

{{ range (site.GetPage "lessons").Pages -}}

### Unit: {{ .Title }}

{{ $m := .Params.Materials -}}
{{- $scratch := newScratch -}}
{{- $mapName := "exampleMap" -}}
{{- range $m -}}
    {{- $scratch.SetInMap $mapName ( $.Site.GetPage . ).Title ( $.Site.GetPage . ) -}}
{{- end -}}
{{- range $k, $v := ($scratch.Get $mapName ) -}}

- [{{ $v.Title }}{{ if isset $v.Params "reporter" }}, {{$v.Params.Reporter}}{{ end }}](#)

- {{% filelink %}}

{{ end -}}   
{{- end -}} 



{{ range (site.GetPage "lessons").Pages }}

## {{ .Title }}

{{ $m := .Params.Materials }}
{{ $scratch := newScratch }}
{{ $mapName := "exampleMap" }}
{{ range $m }}
    {{ $scratch.SetInMap $mapName ( $.Site.GetPage . ).Title ( $.Site.GetPage . ) }}
{{ end }}
{{ range $k, $v := ($scratch.Get $mapName ) }}

### {{ $v.Title }}{{ if isset $v.Params "reporter" }}, {{$v.Params.Reporter}}{{ end }}

{{ .RawContent }}
{{ end }}   

{{ end }} 