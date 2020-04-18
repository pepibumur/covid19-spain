#!/usr/bin/env ruby
require 'csv'
require 'tmpdir'
require 'net/http'
require 'date'
require "ostruct"

deaths_csv_url = "https://raw.githubusercontent.com/datadista/datasets/master/COVID%2019/ccaa_covid19_fallecidos.csv"
cases_csv_url = "https://raw.githubusercontent.com/datadista/datasets/master/COVID%2019/ccaa_covid19_fallecidos.csv"
output_path = File.expand_path("dataset.csv", __dir__)

start_date = Date.parse("2020-03-03")

Dir.mktmpdir do |tmp_dir|
  deaths_path = File.join(tmp_dir, "deaths.csv")
  cases_path = File.join(tmp_dir, "cases.csv")

  File.write(deaths_path, Net::HTTP.get(URI.parse(deaths_csv_url)))
  File.write(cases_path, Net::HTTP.get(URI.parse(cases_csv_url)))

  deaths = CSV.read(deaths_path)
  cases = CSV.read(cases_path)

  records = {}

  for region_index in 1..deaths.count-2 do
    for date_index in 2..deaths[0].count-1 do
      date = Date.parse(deaths[0][date_index])
      region = deaths[region_index][1]
      records[date] = {} unless records.key?(date)
      records[date][region] = OpenStruct.new(cases: nil, deaths: deaths[region_index][date_index].to_i)
    end
  end

  for region_index in 1..cases.count-2 do
    for date_index in 2..cases[0].count-1 do
      date = Date.parse(cases[0][date_index])
      region = cases[region_index][1]
      records[date][region].cases = cases[region_index][date_index].to_i
    end
  end

  normalized_csv = CSV.generate do |csv|
    csv << ["date", "state", "fips", "cases", "deaths"]
    records.reverse_each do |date, regions|
      regions.each do |region, region_data|
        csv << [date.to_s, region, 1, region_data.cases, region_data.deaths]
      end
    end
  end

  File.write(output_path, normalized_csv)
end
