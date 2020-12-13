package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
)

func main() {
	bearer := os.Getenv("TWITTER_BEARER")

	url := "https://api.twitter.com/2/tweets/440322224407314432"
	method := "GET"

	client := &http.Client{
	}
	req, err := http.NewRequest(method, url, nil)

	if err != nil {
		fmt.Println(err)
	}
	req.Header.Add("Authorization", "Bearer "+bearer)
	req.Header.Add("Cookie", "personalization_id=\"v1_wOiukamGyP4nC4SF2RtjAw==\"; guest_id=v1%3A157531068924059043")

	res, err := client.Do(req)
	defer res.Body.Close()
	body, err := ioutil.ReadAll(res.Body)

	fmt.Println(string(body))
}
