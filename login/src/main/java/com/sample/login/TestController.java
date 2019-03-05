package com.sample.login;

import org.springframework.web.bind.annotation.*;

@RestController
public class TestController {
    @GetMapping("/test")
    public int test(){
        return 2;
    }
}
