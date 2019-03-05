package com.sample.login;

public class NoSuchException extends RuntimeException {
    public NoSuchException(String message) {
        super(message);
    }
}
