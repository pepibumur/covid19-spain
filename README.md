# COVID-19 Spain

This project contains scripts to process COVID-19 data from Spain and yield graphs that plot the evolution of the reproduction number per-region.
The data is made available on the website [estadocovid19.es](https://estadocovid19.es), which lives under `/website`.

## Set up

1. Clone the project: `git clone https://github.com/pepibumur/covid19-spain`.
2. Install Python dependencies `pip install -r requirements.txt`.

## Update and normalize datase

Run `./generate_dataset.rb`

## Generate Rt datasets and images

Run `runipy ./Realtime\ R0.ipynb`

## Other useful commands

- **Run notebook:** `jupyter notebook ./Realtime\ R0.ipynb`
- **Build the website:** `cd website && yarn build`.

## Links

- [Jupiter Notebook](https://github.com/k-sys/covid-19/blob/master/Realtime%20R0.ipynb)
- [Number of cases in Spain (CSV)](https://github.com/datadista/datasets/blob/master/COVID%2019/ccaa_covid19_casos.csv)
- [covid19-italy-Rt](https://github.com/tcamin/covid19-italy-Rt)
