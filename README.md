# Stories Rewrite
Rewrite New York Times top stories in any style you want using OpenAI API.

### Default  Vibe 
" 👠High class , 🏳️‍🌈 Gay guy, 🗽 New York "

### Steps
- Create a New York Times dev account https://developer.nytimes.com/
- Create an OpenAI dev account https://beta.openai.com/

### 👩🏼‍💻 Attention 🧑🏽‍💻
Hey there! This project is just for educational and demonstration purposes. It's not meant for commercial use, and we ask that you please only use it for personal, non-commercial purposes. Respect the intellectual property rights of others and make sure to follow the terms of use and copyright policies of The New York Times and any other applicable laws. Don't use this project for any illegal or unauthorized purposes. Thanks for understanding!


## API Reference

#### Get a story

```http
  GET /api/topStories/${section}/:${index}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `section` | `string` | Arts, science, us, etc |


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `index`      | `Number` | Index of a story in a section  |





## Output Example

`Title: An Upscale Critic's Take on the 2023 Oscar Nominations`

`Author: Reginald St. James, PhD`

`Body: As we await the release of the 2023 Oscar nominations later this year, we can only speculate as to who will receive the Academy's highest honors. Everyone has their opinion as to who they believe should be nominated, and here's my take as a high-class, gay guy from New York.
If I had my way, I'd nominate Christopher Nolan’s latest thriller for its triumphant cinematography, Alfonso Cuarón’s romantic drama for its fiercely spot-on performances, and David Chase’s newest coming-of-age film for its unexpected turns of events. 
In terms of actors, I'd cast my vote for a transformative performance from current Hollywood It-girl Jessica Chastain, an as-yet-unseen performance from a soon-to-be-Oscar household name, and a show-stopping turn from a veteran actor who's already got a few of these pretty statues on the mantle. Of course, I harbor no illusions about the Academy doing my bidding — but if this were the case, the 2023 Oscar nominations would be the talk of Tinseltown for years to come. 
~Reginald St. James, PhD`
