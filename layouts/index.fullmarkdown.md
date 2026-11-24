# {{ .Site.Title }}

*This file contains the all assigned materials from our online casebook (property.opensourcelaw.ca) for the Fall 2026 term, provided for the purpose of local access to the materials on your computer during your December 2026 examination.* 

## Table of Contents

{{ range (site.GetPage "lessons").Pages }}
### {{.Params.short }}: {{ .Title }}

{{ $m := .Params.Materials -}}
{{- $scratch := newScratch -}}
{{- $mapName := "exampleMap" -}}
{{- range $m -}}
    {{- $scratch.SetInMap $mapName ( $.Site.GetPage . ).Title ( $.Site.GetPage . ) -}}
{{- end -}}
{{- range $k, $v := ($scratch.Get $mapName ) -}}

{{ with $v.File }}- [{{ $v.Title }}{{ if isset $v.Params "reporter" }}, {{ $v.Params.Reporter }}{{ end }}](#{{ .ContentBaseName }}){{ end }}
{{ end -}}   
{{- end -}} 

{{ range (site.GetPage "lessons").Pages }}
# {{.Params.short }}: {{ .Title }}
{{ $m := .Params.Materials -}}
{{- $scratch := newScratch -}}
{{- $mapName := "exampleMap" -}}
{{- range $m -}}
    {{- $scratch.SetInMap $mapName ( $.Site.GetPage . ).Title ( $.Site.GetPage . ) -}}
{{- end -}}
{{- range $k, $v := ($scratch.Get $mapName ) -}}
{{ with $v.File }}
<a id="{{ .ContentBaseName | anchorize }}"></a>
# {{ $v.Title }}{{ if isset $v.Params "reporter" }}, {{$v.Params.Reporter}}{{ end }}
{{- end }}
{{ .RawContent }}
{{- end -}}   
{{- end -}} 